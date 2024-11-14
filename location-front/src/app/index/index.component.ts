import { Component, OnInit } from '@angular/core';
import { MaisonService } from '../maison.service';
import { Reservation } from '../reservation';

import { Chart , ChartOptions , CategoryScale, LinearScale, BarController, BarElement , registerables} from 'chart.js';



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  reservationStats: Object[] = [];
  chart!: Chart;
  

  totalMaisons!: number;

  totalReservation! : number ;
  mostUsedAddress: string = '';
  totalReservationPrice: number = 0;
  stats: Reservation[] = [];

  constructor(private maisonService: MaisonService) { }

  ngOnInit(): void {

    Chart.register(...registerables);
    this.maisonService.getReservationsByMonth().subscribe(data => {
      this.reservationStats = data;
      this.createChart();
    });

    
   





    this.fetchTotalMaisons();
    this.fetchTotalReservations() ;
    this.getMostUsedAddress() ;
    this.getTotalReservationPrice() ;
    this.getAddressReservationStats() ;
    
    

  }

  fetchTotalMaisons(): void {
    this.maisonService.getTotalMaison().subscribe(
      (total: number) => {
        this.totalMaisons = total;
      },
      (error) => {
        console.log('Error fetching total maisons:', error);
      }
    );
  }

  fetchTotalReservations(): void {
    this.maisonService.getTotalReservation().subscribe(
      (totalR: number) => {
        this.totalReservation = totalR;
      },
      (error) => {
        console.log('Error fetching total reservations:', error);
      }
    );
  }

  getMostUsedAddress(): void {
    this.maisonService.getMostUsedAddress().subscribe(
      (address: string) => {
        this.mostUsedAddress = address;
      },
      (error: any) => {
        console.error('Error fetching most used address:', error);
      }
    );
  }

  getTotalReservationPrice(): void {
    this.maisonService.getTotalReservationPrice().subscribe(
      (price: number) => {
        this.totalReservationPrice = price;
      },
      (error: any) => {
        console.error('Error fetching total reservation price:', error);
      }
    );
  }

  getAddressReservationStats(): void {
    this.maisonService.getAddressReservationStats().subscribe(
      (data) => {
        this.stats = data;
      },
      (error) => {
        console.log('Error fetching address reservation statistics:', error);
      }
    );
  }


  createChart() {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const counts = Array.from({ length: labels.length }, (_, i) => {
      const monthData = this.reservationStats.find(item => item[0] === labels[i]);
      return monthData ? monthData[1] : 0;
    });

    const canvas = document.getElementById('reservationStatsChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    // Check if ctx is not null before creating the chart
    if (ctx) {
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Number of Reservations',
              data: counts,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              stepSize: 1 // Display y-axis values in intervals of 10
            }
          }
        } as ChartOptions // Explicitly define the ChartOptions type
      });
    }
  }
  }
              

  



