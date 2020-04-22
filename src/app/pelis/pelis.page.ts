import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-pelis',
  templateUrl: './pelis.page.html',
  styleUrls: ['./pelis.page.scss'],
})
export class PelisPage implements OnInit {

  information = null;
  showNotas: boolean;
  pdfdata: any;

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


  generatepdf() {
    let titulo = this.information.Title;
    let sinopsis = this.information.Plot;
    let poster = this.information.Poster;
    let year = this.information.Year;
    let rating = this.information.imdbRating;
    let actors = this.information.Actors;
    let genero = this.information.Genre;
    let director = this.information.Director;


    let docDefinition = {
      content: [
        { text: genero, fontSize: 22 },
        { text: titulo, fontSize: 18 },
        { text: year, fontSize: 15 },
        { text: poster },
        { text: sinopsis, fontSize: 12 },
        { text: "Rating: " + rating, fontSize: 12 },
        { text: "Director: " + director, fontSize: 12 },
        { text: "Actores: " + actors, fontSize: 12 }
      ]
    };



    this.pdfdata = pdfMake.createPdf(docDefinition);
    this.pdfdata.download();
  }
}
