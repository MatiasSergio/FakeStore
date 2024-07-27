
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ImageService } from 'src/app/services/image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [MatCardModule, CommonModule],
})
export class CardComponent {
  @Input() product: any;

  imageBlobUrl: SafeUrl | undefined;

  constructor(private imageService: ImageService, private sanitizer: DomSanitizer, private router: Router) { }

  ngOnInit(): void {
    this.loadImageBlob();
  }

  loadImageBlob(): void {
    this.imageService.getImageBlob(this.product.image).subscribe(
      (blob: Blob) => {
        this.imageBlobUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));
      },
      (error) => {
        console.error('Error al obtener la imagen como blob', error);
      }
    );
  }

  onCardClick() {
    this.router.navigate(['product',this.product.id]);
   }
  }
