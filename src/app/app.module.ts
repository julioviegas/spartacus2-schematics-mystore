import {
  BrowserModule,
  BrowserTransferStateModule
} from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { translations, translationChunksConfig } from "@spartacus/assets";
import { B2cStorefrontModule } from "@spartacus/storefront";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl:
            "https://api.cijd699-trainings2-p1-public.model-t.cc.commerce.ondemand.com",
          prefix: "/occ/v2/"
        }
      },
      context: {
        currency: ["USD"],
        language: ["en"],
        baseSite: ["electronics-spa"]
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: "en"
      },
      features: {
        level: "2.0"
      }
    }),
    BrowserTransferStateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
