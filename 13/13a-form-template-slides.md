## FORM IN ANGULAR

Template-Driven Forms - Reactive Forms

---

## Template-Driven Forms

- FormGroup Class - a new form is an instance of a FormGroup Class
- FormControl Class - a new input is an instance if a FormControl Class

---

Property of Form Control Class

- value
- touched
- untouched
- dirty
- pristine
- valid
- errors

---

```html
<form>
  <div class="form-group">
    <label for="email">First Name</label>
    <input ngModel name="firstName" class="form-control" (change)="log(firstName)" id="firstName">
  </div>
  <div class="form-group">
    <label for="comment">Comment</label>
    <textarea ngModel name="comment" class="form-control" id="comment">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

---

## Validation

```html
<form>
  <div class="form-group">
    <label for="email">First Name</label>
    <input required ngModel name="firstName" class="form-control" (change)="log(firstName)" id="firstName">
    <div class="alert alert-danger" *ng-if="firstName.touched && !firstName.valid">First Name is required</div>
  </div>
  <div class="form-group">
    <label for="comment">Comment</label>
    <textarea ngModel name="comment" class="form-control" id="comment">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

---

## ngForm

```html
<form #f="ngForm" (ngSubmit)="submit(f)">
  <div class="form-group">
    <label for="email">First Name</label>
    <input required ngModel name="firstName" class="form-control" (change)="log(firstName)" id="firstName">
    <div class="alert alert-danger" *ng-if="firstName.touched && !firstName.valid">First Name is required</div>
  </div>
  <div class="form-group">
    <label for="comment">Comment</label>
    <textarea ngModel name="comment" class="form-control" id="comment">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

---

## Disabling the Submit Button

```html
<button type="submit" [disabled]="!f.valid" class="btn btn-primary">
  Submit
</button>
```

---

## Working with Check Boxes

```html
<div class="checkbox">
  <label
    ><input type="checkbox" ngModel name="isSubscribed" />Subscribe to
    mailingList</label
  >
</div>
<p>{{f.value | json}}</p>
<button type="submit" [disabled]="!f.valid" class="btn btn-primary">
  Submit
</button>
```

---

## Reactive Forms

- More control over form structure
- Easier to unit test

---

```html
<form [formGroup]="form" ngSubmit="login()">
  <div class="form-group">
    <label for="username">Username</label>
    <input
      formControlName="username"
      class="form-control"
      type="text"
      id="username"
    />
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input
      formControlName="password"
      id="password"
      type="text"
      class="form-control"
    />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

---

```js
import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
@Component({
  selector: "signup-form",
  templateUrl: "signup-form.component.html",
  styleUrls: ["signup-form.component.css"]
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
}
```

---
