import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { RevenuService } from './revenu.service';
import { CreateRevenuDto } from './dto/create.revenu.dto';

@Controller('revenu')
export class RevenuController {
    constructor(private revenuService: RevenuService) { }

    @Get()
    getUsers() {
        return this.revenuService.get();
    }

    @Post()
    store(@Body() createrevenudto: CreateRevenuDto) {
        return this.revenuService.create(createrevenudto);
    }

    @Patch('/:userId')
    update(
        @Body() createrevenudto: CreateRevenuDto,
        @Param('userId', ParseIntPipe) userId: number
    ) {
        return this.revenuService.update(createrevenudto, userId);
    }


    @Delete('/:userId')
    deleteUser(@Param('userId', ParseIntPipe) userId: number) {
        return this.revenuService.delete(userId);
    }
}
