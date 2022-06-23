import { gql, useQuery } from "@apollo/client";
import { useContext } from "react";
import { NavContext } from "../Context";
import { Lesson } from "./Lesson";

const GET_LESSONS_QUERY = gql`
  query MyQuery {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      slug
      title
    }
  }
`;

interface GetLessonsQueryResponse {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: "live" | "class";
  }[];
}

export function SideBar() {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);
  const { isNavOpen } = useContext(NavContext);

  return (
    <div className="bg-gray-700 flex justify-center min-h-screen">
      <aside
        className={
          isNavOpen
            ? "w-[348px] bg-gray-700 p-6 xl:border-l xl:border-gray-600 xl:block  "
            : "w-[348px] bg-gray-700 p-6 xl:border-l xl:border-gray-600 hidden xl:block"
        }
      >
        <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
          Cronograma de aulas
        </span>

        <div className="flex flex-col gap-8">
          {data?.lessons.map((lesson) => {
            return (
              <Lesson
                key={lesson.id}
                title={lesson.title}
                slug={lesson.slug}
                availableAt={new Date(lesson.availableAt)}
                type={lesson.lessonType}
              />
            );
          })}
        </div>
      </aside>
    </div>
  );
}
