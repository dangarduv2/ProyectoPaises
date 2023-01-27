import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {


  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';
  @Input() pepe: string = '';

  @Output() TeclaPresionada: EventEmitter<string> = new EventEmitter();

  termino: string = '';

  ngOnInit() {
    this.TeclaPresionada
      .pipe(debounceTime(1500))
      .subscribe( valorOtermino => {
        this.onDebounce.emit( valorOtermino );
      });
  }

  buscar() {
    this.onEnter.emit( this.termino );
  }

  teclaPresionada() {
    this.TeclaPresionada.emit( this.termino );
  }


}
