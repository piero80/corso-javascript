## FORM IN ANGULAR

---

```html
<form>
  <div class="form-group">
    <label for="email">First Name</label>
    <input ngModel name="firstName" class="form-control" (change)="log()" id="firstName">
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
    <input required ngModel name="firstName" class="form-control" (change)="log()" id="firstName">
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
