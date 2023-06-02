import { EventsEntity } from './events/events.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { EventsModule } from './events/events.module';
import { CalendarModule } from './calendar/calendar.module';
import { CalendarEntity } from './calendar/calendar.entity';
import { SpeakersModule } from './speakers/speakers.module';
import { SpeakersEntity } from './speakers/speakers.entity';
import { OthersModule } from './others/others.module';
import UserEntity from './user/user.entity';
import { OthersEntity } from './others/others.entity';
import { SponsorsModule } from './sponsors/sponsors.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: false,
      envFilePath: ['.env', '.env.development', '.env.production'],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        entities: [
          EventsEntity,
          CalendarEntity,
          SpeakersEntity,
          UserEntity,
          OthersEntity,
        ],
        synchronize: false,
        autoLoadEntities: true,
      }),
    }),
    AuthModule,
    UserModule,
    EventsModule,
    CalendarModule,
    SpeakersModule,
    OthersModule,
    SponsorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
