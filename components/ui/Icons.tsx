import type { ComponentPropsWithoutRef } from 'react';
import { Phone, CheckCircle, Mail, type LucideProps } from 'lucide-react';

export const IconPhone = (props: ComponentPropsWithoutRef<typeof Phone>) => <Phone {...props} />;
export const IconCheck = (props: ComponentPropsWithoutRef<typeof CheckCircle>) => <CheckCircle {...props} />;
export const IconMail = (props: ComponentPropsWithoutRef<typeof Mail>) => <Mail {...props} />;

export type { LucideProps };
