package com.hnd.productservice.configuration;

import com.hnd.productservice.repository.ProductRepository;
import com.hnd.productservice.repository.entity.Product;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

@Configuration
public class DataSetup {
    @Autowired
    private ProductRepository productRepository;
    @PostConstruct
    public void setupData() {
        productRepository.saveAll(Arrays.asList(
                Product.builder().productId(1).productName("Nuhun Ankara Makarna").categoryId(1).quantity(5).price(15.0).description("Burgu Makarna").deleted(Boolean.FALSE).build(),
                Product.builder().productId(2).productName("Ekmek").categoryId(1).quantity(10).price(7.0).description("Tam Tahıllı Ekmek").deleted(Boolean.FALSE).build(),
                Product.builder().productId(3).productName("Yumurta").categoryId(1).quantity(50).price(85.0).description("30'LU XL Yumurta").deleted(Boolean.FALSE).build(),
                Product.builder().productId(4).productName("Sehpa").categoryId(2).quantity(20).price(340.0).description("3'lü Zigon Sehpa").deleted(Boolean.FALSE).build(),
                Product.builder().productId(5).productName("Köşe Takımı").categoryId(2).quantity(15).price(65000.0).description("Keten görünümlü silinebilir kumaş Kullanılmıştır.").deleted(Boolean.FALSE).build(),
                Product.builder().productId(6).productName("Huawei Matebook D15").categoryId(3).quantity(20).price(15000.0).description("16 inç Göz Konforu Sağlayan HUAWEI FullView Ekran | 12. Nesil Intel® Core™ H-Serisi | Super Device").deleted(Boolean.FALSE).build(),
                Product.builder().productId(7).productName("Jbl Wireless Kulaklık").categoryId(3).quantity(10).price(1700.0).description("JBL Tune 520BT, güçlü JBL Pure Bass deneyimini kablosuz olarak yaşamanıza olanak tanır. Kolay kullanımıyla Tune 520BT, USB-C şarj kablosuyla yalnızca 5 dakikalık şarj ile 3 saat pil ömrü sağlar.").deleted(Boolean.FALSE).build(),
                Product.builder().productId(9).productName("Adl Elbise").categoryId(4).quantity(13).price(6750.0).description("Uzun kollu, normal kesim, çiçek desenli siyah elbise.").deleted(Boolean.FALSE).build(),
                Product.builder().productId(10).productName("KUBA Katlanabilir Bisiklet").categoryId(5).quantity(5).price(17000.0).description("20” Tel JANT • Mekanik disk frenler • Cst 20” Lastik • Batarya 36V 7.8 Ah • Maksimum hız 25 km/h ").deleted(Boolean.FALSE).build(),
                Product.builder().productId(11).productName("Xiaomi Mi Pro 4 350W Elektrikli Scooter").categoryId(6).quantity(16).price(24500.0).description("3 saatlik pil ömrüne sahiptir.").deleted(Boolean.FALSE).build(),
                Product.builder().productId(12).productName("Pandora Charm").categoryId(7).quantity(34).price(1439.0).description("Karanlıkta Parlayan Ateşböceği Sallantılı Pandora Charm").deleted(Boolean.FALSE).build(),
                Product.builder().productId(13).productName("Bahçe Hortumu").categoryId(6).quantity(4).price(320.0).description("15 metrelik kıvrılmaz,dolaşmaz ve yer kaplamaz hortum.").deleted(Boolean.FALSE).build()));
    }
}
