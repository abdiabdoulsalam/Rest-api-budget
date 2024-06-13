import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { DepenseService } from './depense.service';
import { CreateDepenseDto } from './dto/create.depense.dto';

@Controller('depense')
export class DepenseController {
    constructor(private depenseService: DepenseService) { }

    @Get()
    getUsers() {
        return this.depenseService.get();
    }

    @Post()
    store(@Body() createdepensedto: CreateDepenseDto) {
        return this.depenseService.create(createdepensedto);
    }

    @Patch('/:userId')
    update(
        @Body() createdepensedto: CreateDepenseDto,
        @Param('userId', ParseIntPipe) userId: number
    ) {
        return this.depenseService.update(createdepensedto, userId);
    }


    @Delete('/:userId')
    deleteUser(@Param('userId', ParseIntPipe) userId: number) {
        return this.depenseService.delete(userId);
    }
}
