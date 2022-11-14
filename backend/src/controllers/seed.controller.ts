import { Controller, Get } from "routing-controllers";
import Container from "typedi";
import SeedService from "../services/seed.service";


@Controller("/seed")
class SeedController {

    constructor(private seedService: SeedService) {
        this.seedService = Container.get(SeedService);
    }

    @Get()
    generateData() {
        return this.seedService.generateData();
    }

}

export default SeedController;