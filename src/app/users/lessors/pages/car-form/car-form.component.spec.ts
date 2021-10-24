<form [formGroup]="addressForm" novalidate (ngSubmit)="onSubmit()">
  <mat-card class="shipping-card">
  <mat-card-header>
  <mat-card-title>Shipping Information</mat-card-title>
</mat-card-header>
<mat-card-content>
<div class="row">
<div class="col">
  <mat-form-field class="full-width">
  <input matInput placeholder="Company" formControlName="company">
  </mat-form-field>
  </div>
  </div>
  <div class="row">
<div class="col">
  <mat-form-field class="full-width">
  <input matInput placeholder="First name" formControlName="firstName">
<mat-error *ngIf="addressForm.controls['firstName'].hasError('required')">
  First name is <strong>required</strong>
</mat-error>
</mat-form-field>
</div>
<div class="col">
  <mat-form-field class="full-width">
  <input matInput placeholder="Last name" formControlName="lastName">
<mat-error *ngIf="addressForm.controls['lastName'].hasError('required')">
  Last name is <strong>required</strong>
</mat-error>
</mat-form-field>
</div>
</div>
<div class="row">
<div class="col">
  <mat-form-field class="full-width">
  <textarea matInput placeholder="Address" formControlName="address"></textarea>
<mat-error *ngIf="addressForm.controls['address'].hasError('required')">
  Address is <strong>required</strong>
</mat-error>
</mat-form-field>
</div>
</div>
<div class="row" *ngIf="!hasUnitNumber">
<div class="col">
  <button mat-button type="button" (click)="hasUnitNumber = !hasUnitNumber">
  + Add C/O, Apt, Suite, Unit
</button>
</div>
</div>
<div class="row" *ngIf="hasUnitNumber">
<div class="col">
  <mat-form-field class="full-width">
  <textarea matInput placeholder="Address 2" formControlName="address2"></textarea>
  </mat-form-field>
  </div>
  </div>
  <div class="row">
<div class="col">
  <mat-form-field class="full-width">
  <input matInput placeholder="City" formControlName="city">
<mat-error *ngIf="addressForm.controls['city'].hasError('required')">
  City is <strong>required</strong>
</mat-error>
</mat-form-field>
</div>
<div class="col">
  <mat-form-field class="full-width">
  <mat-select placeholder="State" formControlName="state">
<mat-option *ngFor="let state of states" [value]="state.abbreviation">
  {{ state.name }}
</mat-option>
</mat-select>
<mat-error *ngIf="addressForm.controls['state'].hasError('required')">
  State is <strong>required</strong>
</mat-error>
</mat-form-field>
</div>
</div>
<div class="row">
<div class="col">
  <mat-form-field class="full-width">
  <input matInput #postalCode maxlength="5" placeholder="Postal Code" type="number" formControlName="postalCode">
  <mat-hint align="end">{{postalCode.value.length}} / 5</mat-hint>
</mat-form-field>
</div>
</div>
<div class="row">
<div class="col">
  <mat-radio-group formControlName="shipping">
  <mat-radio-button value="free">Free Shipping</mat-radio-button>
<mat-radio-button value="priority">Priority Shipping</mat-radio-button>
<mat-radio-button value="nextday">Next Day Shipping</mat-radio-button>
</mat-radio-group>
</div>
</div>
</mat-card-content>
<mat-card-actions>
<button mat-raised-button color="primary" type="submit">Submit</button>
  </mat-card-actions>
  </mat-card>
  </form>
