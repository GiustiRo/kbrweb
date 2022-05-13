import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rombh-reveal',
  templateUrl: './rombh-reveal.component.html',
  styleUrls: ['./rombh-reveal.component.scss']
})
export class RombhRevealComponent implements OnInit {
  @Input() svgcolor: string = '';
  @Input() isSmallscreen: boolean = false;
  display = false;
  nftList = [
    {
      name: 'Pose #2',
      img: 'https://lh3.googleusercontent.com/fnbfcPaKl663sMMs51e7vDhyxnHYZhhcHr6tw4Uq8Er0_S_kzPEOabykSIiokrTKLZPklLwkK3tVGhBQVsLpACyVInQ31rkPjut88w=w600',
      url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/92112731969436745337765961707187404897043976780270453919374924622697009774593'
    },
    {
      name: 'Pose #1',
      img: 'https://lh3.googleusercontent.com/0SF5ApHCuIOVDvDzqz-x2abVo46SAiWL-ltTCOCReKAaYKzDZGMBc5zFL5heH_pVPVQG21a3Se_KLZYkYO_99oZK3_JXHbH_4DeWpA=w600',
      url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/92112731969436745337765961707187404897043976780270453919374924621597498146817'
    },
    {
      name: 'Pose #3',
      img: 'https://lh3.googleusercontent.com/BRMM3vql0ePXYnShPMZafoBk0XOJItFa916ht4-OuAzJKYyvAz9_469d4w1HqPgECMLgTZDFnViqku1HUgu225vH6CoB_DPvXT1n=w600',
      url: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/92112731969436745337765961707187404897043976780270453919374924623796521402369'
    }
  ];
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.display = true;
    },1000)
  }

}
