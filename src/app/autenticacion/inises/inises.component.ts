import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inises',
  templateUrl: './inises.component.html',
  styleUrls: ['./inises.component.css']
})
export class InisesComponent implements OnInit {

  loginForm: FormGroup;
  userdata: any;

  mensaje = false;
  autenticando = false;

  constructor(private formBuilder: FormBuilder,
              private autService: AutenticacionService,
              private router: Router,
              private activatedRouter: ActivatedRoute
              ) { }

              ngOnInit() {
                this.loginForm = this.formBuilder.group({
                  'email': ['', [
                    Validators.required,
                    Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')
                    ]
                  ],
                  'password': ['', [
                    Validators.required,
                    Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+$)'),
                    Validators.minLength(6)
                    ]
                  ]
                });
              }

  isAuth() {
     return this.autService.isAuthenticated();
  }

  onSubmit() {
    this.autenticando = true;
    this.userdata = this.saveUserdata();
    this.autService.inicioSesion(this.userdata);
    setTimeout(() => {
      if (this.isAuth() === false) {
        this.mensaje = true;
        this.autenticando = false;
      }
    }, 2000);
  }
  saveUserdata() {

    const saveUserdata = {

      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value,

    };
    return saveUserdata;
  }

}
