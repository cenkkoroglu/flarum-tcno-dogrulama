import app from 'flarum/app';
import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';
import Alert from 'flarum/components/Alert';

/* global m, moment */

export default class AccountVerificationModal extends Modal {
  init() {
    super.init();
    this.name = m.prop("");
    this.surname = m.prop("");
    this.birthYear = m.prop("");
    this.identityNumber = m.prop("");
  }

  title() {
    return "Hesap Doğrulama";
  }

  form() {
    return [

      < div
    className = "Form-group" >
      < label > İsim < /label>
      < input
    className = "FormControl"
    bidi = {this.name}
    />
    < /div>,

    < div
    className = "Form-group" >
      < label > Soyisim < /label>
      < input
    className = "FormControl"
    bidi = {this.surname}
    />
    < /div>,

    < div
    className = "Form-group" >
      < label > Doğum
    Yılı < /label>
    < input
    className = "FormControl"
    bidi = {this.birthYear}
    />
    < /div>,

    < div
    className = "Form-group" >
      < label > TC
    Kimlik
    Numarası < /label>
    < input
    className = "FormControl"
    bidi = {this.identityNumber}
    />
    < /div>,
  ]
    ;
  }

  content() {
    if (app.session.user.data.attributes.identity_approved === 1) {
      this.alert = new Alert({
        type: "success",
        children: "Hesap doğrulanmış."
      });
      return;
    }
    return m('.Modal-body', [
      this.form(),
      Button.component({
        className: 'Button Button--primary',
        children: "Doğrula",
        disabled: this.name() === "" || this.surname() === "" || this.identityNumber() === "" || this.birthYear() === "",
        onclick: () => {
          app.request({
            url: app.forum.attribute('apiUrl') + '/account-verification',
            method: 'POST',
            data: {
              "data": {
                "name": this.name(),
                "surname": this.surname(),
                "birthYear": this.birthYear(),
                "identityNumber": this.identityNumber()
              }
            },
            errorHandler: this.onerror.bind(this)
          }).then(updated => {
            this.alert = null;
            if (updated.success !== true) {
              this.alert = new Alert({
                type: "error",
                children: updated.data
              });
              m.redraw();
            } else {
              location.reload();
            }
          });
        },
      }),
    ]);
  }
}
