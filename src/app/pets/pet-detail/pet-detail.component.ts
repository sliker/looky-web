import { Component, OnChanges, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/switchMap';
import { get } from 'lodash';


// models
import { Pet } from '../shared/pet.model';
import { User } from '../../users/shared/user.model';
// services
import { PetDetailService } from './pet-detail.service';
import { UserService } from '../../users/shared/user.service';

import {
  petGenderFemale,
  petGenderMale,
  petSizeSmall,
  petSizeMedium,
  petSizeLarge,
  petAgePuppy,
  petAgeSenior,
  petAgeAdult,
  petKindDog,
  siteTitle,
} from '../../constants';


@Component({
  selector: 'looky-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.scss'],
  providers: [
    PetDetailService,
    UserService,
  ],
})
export class PetDetailComponent implements OnInit, OnChanges {
  petRetrieved: boolean;
  pet: Pet;
  user: User;
  loading: boolean;
  userLoaded: boolean;
  showMap: boolean;
  petLatitude: number;
  petLongitude: number;
  petGenderIcon: string;
  petSizeIcon: string;
  petAgeIcon: string;
  petGender: string;
  petSize: string;
  petAge: string;
  petKind: string;
  notFound: boolean;
  shareValue: Object;

  private titleService: Title;
  private route: ActivatedRoute;
  private router: Router;
  private http: HttpClient;
  private petDetailService: PetDetailService;
  private userService: UserService;

  constructor(
    route: ActivatedRoute,
    router: Router,
    titleService: Title,
    http: HttpClient,
    petDetailService: PetDetailService,
    userService: UserService,
  ) {
    this.route = route;
    this.router = router;
    this.titleService = titleService;
    this.http = http;
    this.userLoaded = false;
    this.loading = false;
    this.petDetailService = petDetailService;
    this.userService = userService;
  }

  ngOnInit() {
    const params = this.route.snapshot.params;

    // resolve
    /* this.pet = this.route.snapshot.data['pet'];

    if (this.pet) {
      console.log('-- pet 1 --', this.pet);
      this.petRetrieved = get(this.pet, 'petPublishedStatus', false) === false;
      this.setPetData();
    } */
    // END resolve

    this.petDetailService.getPet(params['type'], params['id']).subscribe((pet: Pet) => {
      if (pet) {
        this.pet = pet;
        this.petRetrieved = get(this.pet, 'petPublishedStatus', false) === false;
        this.setPetData();
      } else {
        // return 404, pet not exists on server
        this.loading = false;
        this.notFound = true;
      }
    });
  }

  ngOnChanges() {
    /* if (this.pet) {
      console.log('-- pet 2 --', this.pet);
      this.petRetrieved = get(this.pet, 'petPublishedStatus', false) === false;
      this.setPetData();
    } */
  }

  setPetData() {
    let userId: string;

    this.loading = false;
    this.petGenderIcon = this.getPetGenderIcon(get(this.pet, 'petGender', 0));
    this.petSizeIcon = this.getPetSizeIcon(get(this.pet, 'petSize', 0));
    this.petAgeIcon = this.getPetAgeIcon(get(this.pet, 'petAge', 0), get(this.pet, 'petKind', 0));
    this.titleService.setTitle(`${get(this.pet, 'petName', '')} :: ${siteTitle}`);
    this.petLatitude = get(this.pet, 'petLatitude', 0);
    this.petLongitude = get(this.pet, 'petLongitude', 0);
    this.petKind = this.getPetKind(get(this.pet, 'petKind', 0));
    this.shareValue = {
      value: (get(this.pet, 'petType') === 0) ? get(this.pet, 'petName', '') : get(this.pet, 'petBreed', ''),
      city: get(this.pet, 'petCity', '')
    };
    userId = get(this.pet, 'uid', '');

    if (userId && !this.user) {
      this.userService.getUser(userId).subscribe((user: User) => {
        if (user) {
          this.user = user;
          this.userLoaded = true;
        }
      });
    }
  }

  getPetKind(petKind: number = 0) {
    return petKind === petKindDog ? 'PET_DETAIL.DOG' : 'PET_DETAIL.CAT';
  }

  getPetGenderIcon(petGender: number = 0) {
    switch (petGender) {
      case petGenderMale:
        this.petGender = 'PET_DETAIL.PET_GENDER_MALE';
        return 'icon-Sex-Male';
      case petGenderFemale:
        this.petGender = 'PET_DETAIL.PET_GENDER_FEMALE';
        return 'icon-Sex-Female';
      default:
        return '';
    }
  }

  getPetSizeIcon(petSize: number = 0) {
    switch (petSize) {
      case petSizeSmall:
        this.petSize = 'PET_DETAIL.PET_SIZE_SMALL';
        return 'icon-Paw-Small';
      case petSizeMedium:
        this.petSize = 'PET_DETAIL.PET_SIZE_MEDIUM';
        return 'icon-Paw-Medium';
      case petSizeLarge:
        this.petSize = 'PET_DETAIL.PET_SIZE_LARGE';
        return 'icon-Paw-Big';
      default:
        return '';
    }
  }

  getPetAgeIcon(petAge: number = 0, petKind: number = 0) {
    switch (petAge) {
      case petAgePuppy:
        this.petAge = 'PET_DETAIL.PET_AGE_PUPPY';
        if (petKind === petKindDog) {
          return 'icon-Dog-Young';
        }

        return 'icon-Cat-Young';
      case petAgeAdult:
        this.petAge = 'PET_DETAIL.PET_AGE_ADULT';
        if (petKind === petKindDog) {
          return 'icon-Dog-Adult';
        }

        return 'icon-Cat-Adult';
      case petAgeSenior:
        this.petAge = 'PET_DETAIL.PET_AGE_SENIOR';
        if (petKind === petKindDog) {
          return 'icon-Dog-Old';
        }

        return 'icon-Cat-Old';
      default:
        return '';
    }
  }

  initGoogleMaps() {
    const mapElement = document.getElementById('pet-map');

    if (mapElement && this.petLatitude && this.petLongitude) {
      const myLatLng = {lat: this.petLatitude, lng: this.petLongitude};
      const mapOptions = {
        center: myLatLng,
        zoom: 15,
        disableDefaultUI: true,
        zoomControl: true,
        rotateControl: true,
        fullscreenControl: true,
        scrollwheel: false
      };
      const map = new google.maps.Map(mapElement, mapOptions);
      const marker = new google.maps.Marker();

      marker.setMap(map);
      marker.setPosition(myLatLng);
    }
  }

  onToggleMap() {
    this.showMap = !this.showMap;

    if (this.showMap) {
      setTimeout(() => {
        this.initGoogleMaps();
      }, 0);
    }
  }

  setImagePlaceholder(event) {
    event.target.src = require('../../../assets/img/looky-logo-gris.png');
  }
}
