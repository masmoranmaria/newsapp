import { Service } from "typedi";
import NewsRepository from "../repositories/news.repository";


@Service()
class SeedService {
  
  randomData: any[] = [
    {
      "title": "Bloody Birthday",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "content": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
      "author": "Tani Bridywater"
    },
    {
      "title": "Dishonored",
      "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
      "content": "Praesent blandit. Nam nulla.",
      "author": "Dorice Brose"
    },
    {
      "title": "Road Home, The (Wo de fu qin mu qin)",
      "description": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      "content": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      "author": "Yuri Lavalde"
    },
    {
      "title": "Musketeers of Pig Alley, The",
      "description": "Nulla mollis molestie lorem.",
      "content": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
      "author": "Andie Caren"
    },
    {
      "title": "Andalusian Dog, An (Chien andalou, Un)",
      "description": "In hac habitasse platea dictumst.",
      "content": "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
      "author": "Corney Grissett"
    },
    {
      "title": "Louis C.K.: Shameless",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "content": "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
      "author": "Barnabe Ommundsen"
    },
    {
      "title": "Corridors of Blood",
      "description": "Nullam molestie nibh in lectus. Pellentesque at nulla.",
      "content": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
      "author": "Niki Gilhouley"
    },
    {
      "title": "The Kiss",
      "description": "Cras in purus eu magna vulputate luctus.",
      "content": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
      "author": "Jessalyn Richford"
    },
    {
      "title": "Inside (À l'intérieur)",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.",
      "content": "Aliquam erat volutpat. In congue.",
      "author": "Lisle Farren"
    },
    {
      "title": "Now!",
      "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
      "content": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      "author": "Alaine Zanettini"
    },
    {
      "title": "Codebreaker",
      "description": "Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      "content": "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
      "author": "Margot Sheldrake"
    },
    {
      "title": "Fruitcake",
      "description": "Sed vel enim sit amet nunc viverra dapibus.",
      "content": "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      "author": "Leona McGray"
    },
    {
      "title": "Species II",
      "description": "Aliquam non mauris.",
      "content": "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      "author": "Terza Norvell"
    },
    {
      "title": "War Comes to America (Why We Fight, 7)",
      "description": "Pellentesque viverra pede ac diam.",
      "content": "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
      "author": "Adriano Colborn"
    },
    {
      "title": "White Fang 2: Myth of the White Wolf",
      "description": "Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      "content": "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
      "author": "Tony Hugonneau"
    },
    {
      "title": "Trilogy of Terror",
      "description": "Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
      "content": "Nullam varius. Nulla facilisi.",
      "author": "Karrah MacAlpyne"
    },
    {
      "title": "Is It Easy to be Young?",
      "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
      "content": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      "author": "Gretel Menhci"
    },
    {
      "title": "Cabin Fever",
      "description": "Duis ac nibh.",
      "content": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
      "author": "Mateo Rehorek"
    },
    {
      "title": "Great Sinner, The",
      "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      "content": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
      "author": "Richie Summerson"
    },
    {
      "title": "I Inside, The",
      "description": "Pellentesque at nulla. Suspendisse potenti.",
      "content": "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
      "author": "Joell Moreinis"
    }
  ]
  
  constructor(private readonly newsRepository: NewsRepository) {};
  
  async generateData() {

    let promises: Promise<any>[] = []
    console.log("Pepino");
    
    this.randomData.forEach(data => promises.push(this.newsRepository.save(data)));
    
    await Promise.allSettled(promises);
    
    return "Done";
  }
  
}

export default SeedService;