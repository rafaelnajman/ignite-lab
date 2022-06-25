import { CheckCircle, Lock } from "phosphor-react";

import { isPast, format } from "date-fns";
import { Link, useParams } from "react-router-dom";
import classnames from "classnames";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>();
  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'd MMMM' • 'k'h'mm "
  );

  const isActiveLesson = slug === props.slug;

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div
        className={classnames(
          "rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors before:w-[13.75px] ",
          {
            "bg-green-500 ": isActiveLesson,
            "before:border-8": isActiveLesson,
            "before:border-green-500 ": isActiveLesson,
            "before:absolute": isActiveLesson,
            "before:left-[-7px] ": isActiveLesson,
            "before:top-[40%] ": isActiveLesson,
            "before:rotate-45 ": isActiveLesson,
            relative: isActiveLesson,
          }
        )}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classnames(
                "text-sm text-blue-500 font-medium flex items-center gap-2",
                {
                  "text-white": isActiveLesson,
                  "text-blue-500": !isActiveLesson,
                }
              )}
            >
              <CheckCircle size={20} />
              Conteudo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em Breve
            </span>
          )}

          <span
            className={classnames(
              "text-xs rounded px-2 py-[0.125rem] text-white border border-gray-300",
              {
                "border-white": isActiveLesson,
                "border-green-300": !isActiveLesson,
              }
            )}
          >
            {props.type === "live" ? "AO VIVO" : "AULA PRATICA"}
          </span>
        </header>
        <strong
          className={classnames(" mt-5 block", {
            "text-white": isActiveLesson,
            "text-gray-200": !isActiveLesson,
          })}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
}
