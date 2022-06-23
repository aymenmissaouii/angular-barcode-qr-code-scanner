import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { NgxBarcodeReaderComponent } from './ngx-barcode-reader/ngx-barcode-reader.component';
import { NgxBarcodeScannerComponent } from './ngx-barcode-scanner/ngx-barcode-scanner.component';
import { NgxBarcodeQrcodeSdkService } from './ngx-barcode-qrcode-sdk.service';

@NgModule({
  declarations: [
    NgxBarcodeReaderComponent,
    NgxBarcodeScannerComponent,
  ],
  imports: [
  ],
  exports: [
    NgxBarcodeReaderComponent,
    NgxBarcodeScannerComponent,
  ]
})
export class NgxBarcodeQrcodeSdkModule {
  constructor(@Optional() @SkipSelf() parentModule?: NgxBarcodeQrcodeSdkModule) {
    if (parentModule) {
      throw new Error(
        'GreetingModule is already loaded. Import it in the AppModule only');
    }
  }

  public static forRoot(config: NgxBarcodeQrcodeSdkService): ModuleWithProviders<NgxBarcodeQrcodeSdkModule> {
    return {
      ngModule: NgxBarcodeQrcodeSdkModule,
      providers: [
        { provide: NgxBarcodeQrcodeSdkService, useValue: config }
      ]
    };
  }
}
