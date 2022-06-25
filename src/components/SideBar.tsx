import { useContext } from "react";
import { NavContext } from "../Context";
import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

export function SideBar() {
  const { data } = useGetLessonsQuery();
  const { isNavOpen } = useContext(NavContext);

  return (
    <div className="bg-gray-700 flex justify-center min-h-screen">
      <aside
        className={`w-[348px] bg-gray-700 p-6 xl:border-l xl:border-gray-600 xl:block ${
          isNavOpen ? "" : "hidden"
        }`}
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
