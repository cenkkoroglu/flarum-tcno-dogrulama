import {extend} from 'flarum/extend';
import app from 'flarum/app';
import AdminNav from 'flarum/components/AdminNav';
import AdminLinkButton from 'flarum/components/AdminLinkButton';
import UsersListPage from './components/UsersListPage';

app.routes['identityApprovedUserList'] = {
  path: '/identity-approved-users-list',
  component: UsersListPage.component(),
};

extend(AdminNav.prototype, 'items', function (items) {
  items.add('identity-approved-users-list', AdminLinkButton.component({
    href: app.route('identityApprovedUserList'),
    icon: 'fas fa-user-check',
    children: 'Doğrulama Yapmış Kullanıcılar',
    description: 'Doğrulama Yapmış Kullanıcıların Listesi'
  }));
});
