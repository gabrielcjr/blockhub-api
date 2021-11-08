import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from 'src/projects/entities/project.entity';
import { EntityNotFoundError, Repository } from 'typeorm';
import { CreateAssociateDto } from './dto/create-associate.dto';
import { UpdateAssociateDto } from './dto/update-associate.dto';
import { Associate } from './entities/associate.entity';

@Injectable()
export class AssociatesService {
  constructor(
    @InjectRepository(Associate)
    private associateRepo: Repository<Associate>
  ) {}
  create(createAssociateDto: CreateAssociateDto) {
    const associate = this.associateRepo.create(createAssociateDto);
    return this.associateRepo.save(associate);
  }

  findAll() {
    return this.associateRepo.find();
  }

  findOne(id: number) {
    return this.associateRepo.findOne(id);
  }

  async update(id: number, updateAssociateDto: UpdateAssociateDto) {
    const updateResult = await this.associateRepo.update(id, updateAssociateDto);
    if (!updateResult.affected) {
      throw new EntityNotFoundError(Associate, id + 'Associate not found');
    }
      return this.associateRepo.findOne(id);
    return `This action updates a #${id} associate`;
  }

  remove(id: number) {
    return `This action removes a #${id} associate`;
  }
}
