"use client";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Award, Calendar, Building } from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  issueDate: string;
  description: string;
  credentialUrl: string;
  skills: string[];
}

interface CertificatesCardProps {
  certificate: Certificate;
}

const CertificatesCard: React.FC<CertificatesCardProps> = ({ certificate }) => {
  return (
    <Card className="group h-full w-full cursor-pointer border-none bg-transparent shadow-none transition-all duration-300 hover:scale-[1.02] max-sm:hover:scale-100">
      <CardHeader className="pb-3 max-sm:pb-2">
        <div className="flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-2">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-blue-500 max-sm:h-4 max-sm:w-4" />
            <CardTitle className="font-outfit text-base font-semibold text-primary dark:text-white max-sm:text-sm">
              {certificate.title}
            </CardTitle>
          </div>
          {certificate.credentialUrl && (
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-100 max-sm:opacity-100 transition-opacity duration-300 group-hover:opacity-100"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="h-4 w-4 text-gray-500 hover:text-blue-500 max-sm:h-3 max-sm:w-3" />
            </a>
          )}
        </div>

        <div className="flex items-center gap-4 max-sm:gap-3 max-sm:flex-col max-sm:items-start text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Building className="h-3 w-3 max-sm:h-2 max-sm:w-2" />
            <span className="max-sm:text-xs">{certificate.issuer}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3 max-sm:h-2 max-sm:w-2" />
            <span className="max-sm:text-xs">{certificate.issueDate}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0 pb-4 max-sm:pb-3">
        <CardDescription className="text-sm text-gray-700 dark:text-gray-300 mb-4 max-sm:mb-3 max-sm:text-xs leading-relaxed">
          {certificate.description}
        </CardDescription>

        <div className="flex flex-wrap gap-2 max-sm:gap-1">
          {certificate.skills.map((skill: string, index: number) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-300 dark:hover:bg-blue-900/30 text-xs px-2 py-1 max-sm:text-[10px] max-sm:px-1.5 max-sm:py-0.5"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CertificatesCard;
