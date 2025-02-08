import { Component } from '@angular/core';
import { Card } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-future-plans',
  imports: [Card,ButtonModule],
  templateUrl: './future-plans.component.html',
  styleUrl: './future-plans.component.scss'
})
export class FuturePlansComponent {
  items=[
    {
      imgSrc:'https://chelyabinsk.oboronmet.ru/upload/resize_cache/iblock/197/jizkcd2utt5knuskewqgpp3azl08azzb/284_284_2/instrumentalnye-stali-pokovka_.jpg',
      alt:'',
      title:'test 1',
      text:'djsaipdjasid adsijafda dsjadpoasjdsa sadaspfmagfa 2ej1iojaspoma[maf'
    },
    {
      imgSrc:'https://chelyabinsk.oboronmet.ru/upload/resize_cache/iblock/197/jizkcd2utt5knuskewqgpp3azl08azzb/284_284_2/instrumentalnye-stali-pokovka_.jpg',
      alt:'',
      title:'test 2',
      text:'dasojfdapofkaf[akfaskfa faskfmaspfmapmfa go[pgamgoagoag knfjfFIJ[wfijkndlk fknFpifejaepigjapegnz'
    },
    {
      imgSrc:'https://chelyabinsk.oboronmet.ru/upload/resize_cache/iblock/197/jizkcd2utt5knuskewqgpp3azl08azzb/284_284_2/instrumentalnye-stali-pokovka_.jpg',
      alt:'',
      title:'test 3',
      text:'xsrdctfvyuiokzetxrctyu rdctfvyuhi dcftvgybuiokpl tcfvygbuyhniokolp dctvfyuhijokol ctfvybuhiok fvygbuiom fvygbuiom fvygubinfom ctvfuybinomfzdsz9ioj h0ripgojzd o[jthigldf'
    },
    {
      imgSrc:'https://chelyabinsk.oboronmet.ru/upload/resize_cache/iblock/197/jizkcd2utt5knuskewqgpp3azl08azzb/284_284_2/instrumentalnye-stali-pokovka_.jpg',
      alt:'',
      title:'test 4',
      text:'xsrdctfvyuiokzetxrctyu rdctfvyuhi dcftvgybuiokpl tcfvygbuyhniokolp dctvfyuhijokol ctfvybuhiok fvygbuiom fvygbuiom fvygubinfom ctvfuybinomfzdsz9ioj h0ripgojzd o[jthigldf'
    }
  ]
}
