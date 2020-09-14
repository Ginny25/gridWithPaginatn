import { Component } from '@angular/core';

export interface contentType {
  name: string
  phone: number
  address: string
  dob: string


}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {


  pages: number[] = [5, 10, 20]


  header = [{
    column: "name",
    label: "Name"
  },
  {
    column: "phone",
    label: "Phone"
  },
  {
    column: "address",
    label: " Address"
  },
  {
    column: "dob",
    label: "Date of Birth"
  }]



  content: contentType[] = [{
    name: "Ginny",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'

  },
  {
    phone: 7777777999,
    address: "Raipur",
    name: "John",
    dob: '29/Jun/2020'

  },
  {
    name: "Doe",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },
  {
    name: "Dovve",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },
  {
    name: "Doevvv",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },
  {
    name: "Doevvvvv",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },
  {
    name: "Dodddde",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },
  {
    name: "Doedvvv",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },
  {
    name: "Doesssss",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },
  {
    name: "Doeqqqq",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },
  {
    name: "Doeqqdddd",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },
  {
    name: "Doessss",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },
  {
    name: "Doessss",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },
  {
    name: "Doeqqqq",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },
  {
    name: "Doevv",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },
  {
    name: "Doejjj",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },
  {
    name: "Doeppppp",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },
  {
    name: "Doellll",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },
  {
    name: "Doek",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },
  {
    name: "Doeq",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },
  {
    name: "Doew",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },
  {
    name: "Doewww",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },
  {
    name: "Doewwww",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },
  {
    name: "Doewwwwws",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },
  {
    name: "Doessss",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },
  {
    name: "Doessaaa",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },
  {
    name: "Doeaaaa",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },
  {
    name: "Doebbb",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },
  {
    name: "Doennnnn",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },
  {
    name: "Doennnnnn",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },
  {
    name: "Doesssd",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },
  {
    name: "Doegggg",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },
  {
    name: "Doehhhhh",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },
  {
    name: "Doelllll",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },
  {
    name: "Doe",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },
  {
    name: "Doe",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },
  {
    name: "Doe",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },
  {
    name: "Doe",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },
  {
    name: "Doe",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },
  {
    name: "Doe40",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'
  },

  // }
  {
    name: "Kroos",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'

  },
  {
    name: "Paul",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'

  },
  {
    name: "Lionel",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'

  },
  {
    name: "Neymar",
    phone: 777777777,
    address: "Pune",
    dob: '28/Jun/2020'

  },
  {
    name: "Ronaldo",
    phone: 777777777,
    address: "Portugal",
    dob: '5/feb/1986'

  },
  {
    name: "Hcxxnd",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Hrrrrand",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Hbnnnd",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Hacccland",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Haaland",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Haazzzland",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Haalxxxxand",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Haalancccd",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Haaland",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Haavvland",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Haalancccd",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Haalancccd",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Haalaccccnd",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Haaland",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Haalannnnd",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Haannland",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Hnnnaland",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Haaland",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "nnnnd",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "nnnnd",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Hannnnd",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Havvvvand",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Hxxnd",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Haaland",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Haaxxxnd",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Haavdvdvdd",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Hvdvdvdnd",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Haadvdvdvnd",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Hjyyland",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Haadvdvd",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Haaland",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "vvvand",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Haadddnd",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Haaland",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Haaland",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "sssland",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "sssland",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "tggffd",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "ddddnd",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Haabbbd",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Haaland",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Hcccd",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Haaland",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Hdddd",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Hddland",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Haff",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Hff",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Haalavdvdvnd",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Haaldvdvdvvand",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Haalsdvdsvsddsand",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Hasvddvddaland",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Haalacvdvnd",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "gggand",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "Haaland",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  },
  {
    name: "and",
    phone: 777777777,
    address: "Dortmund",
    dob: '5/feb/1986'
  }



  ]




}


