import ArcGalleryHero from "@/components/ArcGalleryHero";

const Index = () => {
  const images = [
    "https://cdn.poehali.dev/projects/351e2191-dabf-430c-9816-8d12bf9dce68/files/f3a35a9a-afa4-4c88-8145-bad24e5c38d3.jpg",
    "/freepik__a-closeup-shot-features-a-glossy-purple-crossshape__48873.png",
    "https://cdn.poehali.dev/projects/351e2191-dabf-430c-9816-8d12bf9dce68/files/16581244-1785-460f-a8c5-68138a934814.jpg",
    "/freepik__the-style-is-3d-model-with-octane-render-volumetri__57555.png",
    "/eqirGoRIJPaIMgEUeliWpNxeFmI.jpg",
    "https://cdn.poehali.dev/projects/351e2191-dabf-430c-9816-8d12bf9dce68/files/18705607-1df2-4bf7-bb6f-92b2e3da5889.jpg",
    "/freepik__abstract-digital-art-featuring-a-series-of-horizon__489.png",
    "/freepik__enhance__98192.png",
    "/VkvvhXlWo3hEBzcqwTpjd_aa4bf9ee998f4ec0b17a8bf16fe3e9e2.jpg",
    "/ultra-detailed_close-up_side_profile_of_a_dark-skinned_model_wearing_futuristic_chrome_wraparound_s_ps17q5ms2ptu5t6bdru6_2.png",
    "/hyperrealistic_commercial_product_photography_of_luxury_chrome_sunglasses_on_male_model_extreme_chi_fanguv2w9zx489lcivwa_2.png",
  ];

  return (
    <main className="relative min-h-screen bg-background">
      <ArcGalleryHero
        images={images}
        startAngle={20}
        endAngle={160}
        radiusLg={480}
        radiusMd={360}
        radiusSm={260}
        cardSizeLg={120}
        cardSizeMd={100}
        cardSizeSm={80}
        className="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24"
      />
    </main>
  );
};

export default Index;