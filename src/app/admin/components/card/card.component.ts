import { Component, EventEmitter,  Input,  OnInit, Output } from '@angular/core';
import { PeopleService } from '../../../shared/services/people.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
  }

  @Output() editEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();

  @Input() id: String;
  @Input() name: String;  
  @Input() age: number;
  @Input() urlImage: String;

  auxEnable: String;
  @Input()
      get enable() {
        return (this.auxEnable === "yes") ? true :  false;
      }
      set enable(enable: Boolean) {
        this.auxEnable = enable ? "yes" : "no";
      }

  edit() {
    this.editEvent.emit({
      id: this.id,
      name: this.name,
      age: this.age,
      enable: this.enable,
      urlImage: this.urlImage
    });
  }

  delete() {
    this.peopleService.deletePerson(this.id).subscribe(
      res => {
        this.deleteEvent.emit();
      },
      err => {
        console.log('ERROR');
      }
    );
  }

}