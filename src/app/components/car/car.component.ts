import { Component } from '@angular/core';

@Component ({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css']
})

export class CarComponent {
    public car = {
        name: 'Ferrari',
        mileage: 50000,
        tankCapacity: 150,
        currentFuel: 10,
        characteristics: [
            'Motor: flat-12, volume: 12l',
            '2 seats',
            'max-speed: 280 km/h',
            'Power: 390 h'
        ]
    };

    onDriveHadler() {
        if (!this.car.currentFuel) { return; }
        for (let i = this.car.currentFuel; i >= 1; i--) {
            setTimeout(() => {
                this.car.mileage++;
                this.car.currentFuel--;
            }, 1000);
        }
    }

    refuel() {
        this.car.currentFuel = 150;
    }
}
