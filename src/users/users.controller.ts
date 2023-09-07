import { Controller, Module, NotFoundException, Query } from '@nestjs/common';
import { Body, Post,Get,Delete,Patch,Param } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './update-user.dto';



@Controller('users')
export class UsersController {


    constructor( private service:UsersService){

    }

    @Post('signup')
    createUser(@Body() body: CreateUserDto){
        console.log(body);
        this.service.create(body.email, body.password);
    }

    @Get("/:id")
    async findUSer(@Param("id") id:string){
        const user = await this.service.findOne(parseInt(id));
        if(!user){
            throw new NotFoundException('user not found')
        }
        return user;
    }

    @Get()
    findAllUser(@Query('email') email:string){
        return this.service.findAll();
    }

    @Delete('/:id')
    removeUser(@Param('id') id:string){
        return this.service.remove(parseInt(id));
    }

    @Patch('/:id')
    updateUser(@Param('id') id:string, @Body() body:UpdateUserDto){
        return this.service.update(parseInt(id), body);
    }



}
