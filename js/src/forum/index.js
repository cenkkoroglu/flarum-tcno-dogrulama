import {extend} from 'flarum/extend';
import app from 'flarum/app';
import SessionDropdown from 'flarum/components/SessionDropdown';
import AccountVerificationModal from './components/AccountVerificationModal';
import Button from 'flarum/components/Button';
import PostUser from 'flarum/components/PostUser';
import UserCard from 'flarum/components/UserCard';
import listItems from 'flarum/helpers/listItems';

const matchTag = tagName => {
  return node => node && node.tag && node.tag === tagName;
};

const get = (from, ...selectors) =>
  [...selectors].map(s =>
    s
      .replace(/\[([^\[\]]*)\]/g, '.$1.')
      .split('.')
      .filter(t => t !== '')
      .reduce((prev, cur) => prev && prev[cur], from)
  );


extend(SessionDropdown.prototype, 'items', function (items, user) {
  if (app.session.user) {
    items.add('account-verification', Button.component({
      icon: 'fas fa-user-check',
      children: 'Hesap Doğrulama',
      onclick() {
        app.modal.show(new AccountVerificationModal());
      },
    }));
  }
});


extend(UserCard.prototype, 'view', function(view) {
  const user = this.props.user;
  const badges = user.badges().toArray();

  if (!badges.length) return view;

  const container = get(view, 'children[0].children[0]')[0];
  const profile = container && container.children.find(i => i.attrs && i.attrs.className === 'UserCard-profile');

  if (!container || !profile || user.data.attributes.identity_approved !== 1) return view;

  profile.children = profile.children.map(i => {
    const { className } = i.attrs || {};

    if (className === 'UserCard-badges badges') return null;
    if (className === 'UserCard-identity') {
      const els = [
        <span className="username">{user && user.displayName()}</span>,
        <ul className="UserCard-badges badges">
          {listItems(badges)}
          <li>
            <span className="Verified">
              <span className="fa-stack">
                <i className="fas fa-certificate fa-stack-2x"></i>
                <i className="fas fa-check fa-stack-1x fa-inverse"></i>
              </span>
            </span>
          </li>
        </ul>,
      ];

      if (i.children[0].tag === 'a') {
        i.children[0].children[1] = els;
      } else {
        i.children[1] = els;
      }
    }

    return i;
  });

  return view;
});

extend(PostUser.prototype, 'view', function (node) {
  const post = this.props.post;
  const user = post.user();

  if (!user || user.data.attributes.identity_approved !== 1) {
    return node;
  }

  const header = node.children.find(matchTag('h3'));
  header.children.push(<span className="Verified">
    <span className="fa-stack">
      <i className="fas fa-certificate fa-stack-2x"></i>
      <i className="fas fa-check fa-stack-1x fa-inverse"></i>
    </span>
  </span>);

  return node;
});
