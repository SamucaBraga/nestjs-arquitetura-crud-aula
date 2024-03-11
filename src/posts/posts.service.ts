import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Post, Prisma } from '@prisma/client';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreatePostDto): Promise<Post> {
    const { authorEmail } = dto;

    delete dto.authorEmail;

    const data: Prisma.PostCreateInput = {
      ...dto,
      author: {
        connect: {
          email: authorEmail,
        },
      },
    };

    return this.prisma.post.create({
      data,
      include: {
        author: true,
      },
    });
  }

  async findAll(): Promise<Post[]> {
    return this.prisma.post.findMany({
      include: {
        author: true,
      },
    });
  }

  async getPublishedPosts(): Promise<Post[]> {
    return this.prisma.post.findMany({
      where: {
        published: true,
      },
    });
  }

  async findOne(id: number): Promise<Post | null> {
    return this.prisma.post.findUniqueOrThrow({
      where: { id },
      include: {
        author: true,
      },
    });
  }

  async update(id: number, dto: UpdatePostDto): Promise<Post> {
    const data: Prisma.PostUpdateInput = {
      ...dto,
    };

    return this.prisma.post.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Post> {
    return this.prisma.post.delete({
      where: { id },
    });
  }
}
