import app from 'flarum/app';
import Page from 'flarum/components/Page';
import Button from 'flarum/components/Button';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import humanTime from 'flarum/helpers/humanTime';
import icon from 'flarum/helpers/icon';

function UserItem(user) {
  if (user.data.attributes.identity_approved === 0) {
    return false;
  }

  const url = `${app.forum.attribute('baseUrl')}/u/${user.id()}`;
  const online = user.isOnline();

  return [
    m('li', {"data-id": user.id()}, [
      m('div', {className: 'UsersListItem-info'}, [
        m('span', {className: 'UsersListItem-name'}, [
          user.username(),
        ]),
        m('span', {className: 'UserCard-lastSeen' + (online ? ' online' : '')}, [
          online
            ? [icon('fas fa-circle'), ' ', 'Online']
            : [icon('far fa-clock'), ' ', humanTime(user.lastSeenAt())]
        ]),
        m('a', {
          className: 'Button Button--link',
          target: '_blank',
          href: url
        }, [
          icon('fas fa-eye')
        ]),
        Button.component({
          className: 'Button Button--link',
          icon: 'far fa-times-circle',
          onclick: function (e) {
            e.preventDefault();
            app.request({
              url: app.forum.attribute('apiUrl') + '/account-verification-admin',
              method: 'POST',
              data: {
                "data": {
                  "user_id": user.id()
                }
              }
            }).then(() => {
              location.reload();
            });
          }
        })
      ])
    ])
  ];
}

export default class UsersListPage extends Page {
  init() {
    super.init();

    this.loading = true;
    this.moreResults = false;
    this.users = [];
    this.refresh();
  }

  view() {
    let loading;

    if (this.loading) {
      loading = LoadingIndicator.component();
    } else if (this.moreResults) {
      loading = Button.component({
        children: "Daha Fazla Sonuç",
        className: 'Button',
        onclick: this.loadMore.bind(this)
      });
    }

    return <div className="UsersListPage">
      <div className="UsersListPage-list">
        <div className="container">
          <div className="UsersListItems">
            <label>Kullanıcılar</label>
            <ol className="UsersList">{this.users.map(UserItem)}</ol>
            <div className="UsersListPage-loadMore">
              {loading}
            </div>
          </div>
        </div>
      </div>
    </div>
  }

  refresh(clear = true) {
    if (clear) {
      this.loading = true;
      this.users = [];
    }

    return this.loadResults().then(
      results => {
        this.users = [];
        this.parseResults(results);
      },
      () => {
        this.loading = false;
        m.redraw();
      }
    );
  }

  loadResults(offset) {
    const params = {};
    params.page = {
      offset: offset,
      limit: 50
    };
    params.sort = 'username';

    return app.store.find('users', params);
  }

  loadMore() {
    this.loading = true;

    this.loadResults(this.users.length)
      .then(this.parseResults.bind(this));
  }

  parseResults(results) {
    [].push.apply(this.users, results);

    this.loading = false;
    this.moreResults = !!results.payload.links.next;

    m.lazyRedraw();

    return results;
  }
}
