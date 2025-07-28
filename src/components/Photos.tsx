
import { Card, CardContent } from "@/components/ui/card";

const Photos = () => {
  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      alt: "Creative workspace with laptop",
      title: "Creative Workspace"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      alt: "Programming and development",
      title: "Development Process"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
      alt: "Colorful code on monitor",
      title: "Code Architecture"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop",
      alt: "Starry night sky",
      title: "Night Innovation"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
      alt: "Mountain landscape",
      title: "Peak Performance"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=600&fit=crop",
      alt: "Sunlight through trees",
      title: "Growth & Innovation"
    }
  ];

  return (
    <section id="photos" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Visual <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Capturing moments of creativity, innovation, and the beauty of technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo) => (
            <Card key={photo.id} className="group overflow-hidden hover-lift cursor-pointer">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {photo.title}
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photos;
