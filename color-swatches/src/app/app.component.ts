import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSliderModule} from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    MatGridListModule,
    MatSliderModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'color-swatches';

  public hue: number = 0;
  public saturation: number = 100;
  public lightness: number = 50;
  public colors: Array<any> = [];
  public colorNames: Set<string> = new Set();

  constructor(
    protected http: HttpClient
  ) {}

  ngOnInit(): void {
  }

  public getColors(): void {
    this.colors = [];
    this.colorNames = new Set();

    for (let i = 0; i < 360; i++) {
      this.hue = i;

      this.http.get(`https://www.thecolorapi.com/id?hsl=(${this.hue},${this.saturation}%,${this.lightness}%)`)
        .subscribe((result: any) => {
          if (!this.colorNames.has(result.name.value)) {
            this.colorNames.add(result.name.value);
            this.colors.push({ image: result.image.bare, rgb: result.rgb.value, name: result.name.value });
          }
      });
    }
  }
}
