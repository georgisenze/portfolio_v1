import { Card, CardBody, Typography } from "@material-tailwind/react";
import { TypographySafe } from "@/components/TypographySafe";

interface SkillCardProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

export function SkillCard({ icon: Icon, title, children }: SkillCardProps) {
  return (
     <Card {...({} as any)} color="transparent" shadow={false}>
       <CardBody {...({} as any)}  className="grid justify-center text-center">
        <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>
        <TypographySafe {...({} as any)} variant="h5" color="gray-gray" className="mb-2">
          {title}
        </TypographySafe>
        <TypographySafe {...({} as any)} className="px-8 font-normal !text-gray-500">
          {children}
        </TypographySafe>
      </CardBody>
    </Card>
  );
}

export default SkillCard;
