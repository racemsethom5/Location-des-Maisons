import { Component, OnInit } from '@angular/core';
import { Maison } from '../maison';
import { ActivatedRoute } from '@angular/router';
import { MaisonService } from '../maison.service';

@Component({
  selector: 'app-maison-details',
  templateUrl: './maison-details.component.html',
  styleUrls: ['./maison-details.component.css']
})
export class MaisonDetailsComponent implements OnInit{

  id!: number
  maison!: Maison
  constructor(private route: ActivatedRoute, private employeService: MaisonService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.maison = new Maison();
    this.employeService.getMaisonInfo(this.id).subscribe( data => {
      this.maison = data;
    });
  }

}
