import { axiosInstance } from '@/factory/axiosInstances';
import { Configuration, DefaultApiFactory } from '@/apis';

export const mcafe = DefaultApiFactory(new Configuration(), '', axiosInstance);
