import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'charts';

  chartData = {
    data: [[12, 1, 23, 33, 1, 12, 25, 45, 22, 36, 10, 8], [32, 11, 10, 20, 41, 10, 52, 5, 33, 16, 10, 5], [22, 1, 2, 32, 20, 10, 20, 15, 23, 15, 12, 35], [20, 5, 23, 45, 2, 5, 6, 16, 48, 23, 5, 15], [12, 1, 23, 52, 1, 12, 25, 45, 22, 36, 10, 8]],
    legend: ['Produto 1', 'Produto 2', 'Produto 3', 'Produto 4', 'Produto 5'],
    xLabels: ['JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO', 'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO']
  }
}
