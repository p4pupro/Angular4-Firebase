import { PresupuestosService } from './../../servicios/presupuestos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.css']
})
export class PresupuestosComponent implements OnInit {

  presupuestos: any[] = [];
  cargando = true;

  constructor(private presupuestosService: PresupuestosService ) {
    this.presupuestosService.getPresupuestos()
      .subscribe(presupuestos => {
        for (const id$ in presupuestos) {
          const p = presupuestos[id$];
          p.id$ = id$;
          this.presupuestos.push(presupuestos[id$]);
        }
        this.cargando = false;
      })
   }

  ngOnInit() {
  }

  eliminarPresupuesto(id$) {
    this.presupuestosService.delPresupuesto(id$)
        .subscribe ( res => {
          this.presupuestos = [];
          this.presupuestosService.getPresupuestos()
            .subscribe(presupuestos => {
              for (const id$ in presupuestos) {
                const p = presupuestos[id$];
                p.id$ = id$;
                this.presupuestos.push(presupuestos[id$]);
              }
            })
        })
  }

}
