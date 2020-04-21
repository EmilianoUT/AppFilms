import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-pelis',
  templateUrl: './pelis.page.html',
  styleUrls: ['./pelis.page.scss'],
})
export class PelisPage implements OnInit {

  information = null;
  showNotas: boolean;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.movieService.details(id).subscribe(result => {
      this.information = result;
    });
  }
  openWebsite() {
    window.open(this.information.Website, '_blank');
  }


  showNote() {
    this.showNotas = !this.showNotas;
  }

}
