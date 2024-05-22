import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

export interface resource {
  rel: string,
  href: string,
  as: string
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  resources: resource[] = [
    {
      href: "../../../assets/images/anchorage/hero.jpg",
      rel: "preload",
      as: "image"
    },
    {
      href: "../../../assets/images/anchorage/about-us-1.jpg",
      rel: "prefetch",
      as: "image"
    },
    {
      href: "../../../assets/images/anchorage/about-us-2.jpg",
      rel: "prefetch",
      as: "image"
    },
    {
      href: "../../../assets/images/anchorage/about-us-3.jpg",
      rel: "prefetch",
      as: "image"
    },
    {
      href: "../../../assets/images/anchorage/about-us-4.jpg",
      rel: "prefetch",
      as: "image"
    },
    {
      href: "../../../assets/images/anchorage/du-maurier-1.jpg",
      rel: "prefetch",
      as: "image"
    },
    {
      href: "../../../assets/images/anchorage/du-maurier-2.jpg",
      rel: "prefetch",
      as: "image"
    },
    {
      href: "../../../assets/images/anchorage/du-maurier-3.jpg",
      rel: "prefetch",
      as: "image"
    },
    {
      href: "../../../assets/images/anchorage/gallery-1.jpg",
      rel: "prefetch",
      as: "image"
    },
    {
      href: "../../../assets/images/anchorage/gallery-2.jpg",
      rel: "prefetch",
      as: "image"
    },
    {
      href: "../../../assets/images/anchorage/gallery-3.jpg",
      rel: "prefetch",
      as: "image"
    },
    {
      href: "../../../assets/images/anchorage/gallery-4.jpg",
      rel: "prefetch",
      as: "image"
    },
    {
      href: "../../../assets/images/anchorage/gallery-5.jpg",
      rel: "prefetch",
      as: "image"
    },
    {
      href: "../../../assets/images/anchorage/gallery-6.jpg",
      rel: "prefetch",
      as: "image"
    },
    {
      href: "../../../assets/images/anchorage/gallery-7.jpg",
      rel: "prefetch",
      as: "image"
    },
    {
      href: "../../../assets/images/anchorage/gallery-8.jpg",
      rel: "prefetch",
      as: "image"
    },
    {
      href: "../../../assets/images/anchorage/hepworth-1.jpg",
      rel: "prefetch",
      as: "image"
    },
    {
      href: "../../../assets/images/anchorage/hepworth-2.jpg",
      rel: "prefetch",
      as: "image"
    },
    {
      href: "../../../assets/images/anchorage/hepworth-3.jpg",
      rel: "prefetch",
      as: "image"
    },
    {
      href: "../../../assets/images/anchorage/wallace-1.jpg",
      rel: "prefetch",
      as: "image"
    },
    {
      href: "../../../assets/images/anchorage/wallace-2.jpg",
      rel: "prefetch",
      as: "image"
    },
    {
      href: "../../../assets/images/anchorage/wallace-3.jpg",
      rel: "prefetch",
      as: "image"
    },
  ]

  constructor(
    private _renderer2: Renderer2, 
    @Inject(DOCUMENT) private _document: Document
  ) {

  }

  ngOnInit() {
    this.resources.forEach(resource => {
      let link = document.createElement('link'); // creates the script tag
      link.rel = resource.rel; // sets the source (insert url in between quotes)
      link.href = resource.href;
      link.as = resource.as;
      document.getElementsByTagName('head')[0].appendChild(link); 
    });
    
    let script = this._renderer2.createElement('script');
    script.type = `text/javascript`;
    script.src = './assets/js/vendors.min.js';
    this._renderer2.appendChild(this._document.body, script);
  }
}
