import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { LOKPRIYA_CENTERS } from "@/constants/dashboard";
import { Building2 } from "lucide-react";

/**
 * Lokpriya Centers section with horizontal carousel
 * Displays popular centers with scroll functionality
 */
export function LokpriyaSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">लोकप्रिय केंद्र</CardTitle>
      </CardHeader>
      <CardContent>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {LOKPRIYA_CENTERS.map((center) => (
              <CarouselItem key={center.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/4">
                <Card className="overflow-hidden hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-0">
                    <div className={`${center.bgColor} p-6 flex items-center justify-center min-h-[160px]`}>
                      <div className="w-32 h-32 bg-white/80 rounded-lg flex items-center justify-center">
                        <Building2 className="w-16 h-16 text-primary" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-base mb-1">{center.title}</h3>
                      <p className="text-xs text-muted-foreground mb-2">{center.location}</p>
                      <div className="mb-2">
                        <span className="text-xs font-medium text-foreground">Bio</span>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-3">{center.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>
      </CardContent>
    </Card>
  );
}
