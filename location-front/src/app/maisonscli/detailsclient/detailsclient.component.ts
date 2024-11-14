import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Maison } from 'src/app/maison';
import { MaisonService } from 'src/app/maison.service';

@Component({
  selector: 'app-detailsclient',
  templateUrl: './detailsclient.component.html',
  styleUrls: ['./detailsclient.component.css']
})
export class DetailsclientComponent implements OnInit{

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


