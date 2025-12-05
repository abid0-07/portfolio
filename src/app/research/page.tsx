import Heading from "@/components/Heading";
import FramerWrapper from "@/components/animation/FramerWrapper";
import ScrollContainer from "@/components/ScrollContainer";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink, FlaskConical, Book } from "lucide-react";
import Link from "next/link";
import { portfolioConfig } from "@/config/portfolio.config";

interface ResearchItem {
  title: string;
  author?: string;
  authors?: string;
  year?: string;
  abstract?: string;
  tags?: string[];
  link?: string;
  pdf?: string;
}

const ResearchCard: React.FC<{ item: ResearchItem; index?: number }> = ({
  item,
  index = 0,
}) => {
  const authorLine = item.authors ?? item.author ?? "Author unavailable";

  return (
    <FramerWrapper y={0} scale={0.9} delay={index * 0.12} className="w-full">
      <Card className="h-full border-2 transition-shadow hover:shadow-lg">
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <CardTitle className="text-lg font-bold text-primary">
                {item.title}
              </CardTitle>
              <div className="text-sm text-muted-foreground mt-1">
                {authorLine}{" "}
                {item.year ? (
                  <span className="text-xs text-gray-500">• {item.year}</span>
                ) : null}
              </div>
            </div>
            {item.link && (
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2"
              >
                <ExternalLink className="h-5 w-5 text-gray-500 hover:text-blue-500" />
              </Link>
            )}
          </div>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          {item.abstract ? (
            <CardDescription className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              {item.abstract}
            </CardDescription>
          ) : (
            <p className="text-sm text-muted-foreground">
              No abstract available.
            </p>
          )}

          <div className="flex flex-wrap gap-2">
            {(item.tags || []).map((t, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="bg-blue-50 text-blue-700 text-xs px-2 py-1"
              >
                {t}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="pt-0">
          <div className="flex gap-2 ml-auto">
            {item.pdf && (
              <a
                href={item.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" })
                )}
              >
                View PDF
              </a>
            )}
            {item.link && (
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "default", size: "sm" })
                )}
              >
                Read More
              </Link>
            )}
          </div>
        </CardFooter>
      </Card>
    </FramerWrapper>
  );
};

const ResearchPage = () => {
  const researchItems = portfolioConfig.research || [];

  return (
    <ScrollContainer>
      <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden px-4 max-sm:px-2">
        <Badge variant="secondary" className="gap-1.5 py-1 max-sm:text-xs">
          <Book className="h-4 w-4 max-sm:h-3 max-sm:w-3" />
          Research
        </Badge>

        <div className="flex flex-col gap-3">
          <Heading>Research</Heading>
          <FramerWrapper y={0} x={120}>
            <p className="font-inter text-lg w-full text-primary/90 max-sm:text-base">
              Selected research projects and publications from my portfolio
              data.
            </p>
          </FramerWrapper>
        </div>

        <div className="w-full flex flex-col gap-4 pb-12">
          {researchItems.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
              {researchItems.map((item, idx) => (
                <ResearchCard key={idx} item={item} index={idx} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-sm">
              No research entries configured yet.
            </p>
          )}
        </div>
      </div>
    </ScrollContainer>
  );
};

export default ResearchPage;
