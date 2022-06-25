import { DefaultUi, Player, Youtube } from "@vime/react";
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Image,
  Lightning,
} from "phosphor-react";

import "@vime/core/themes/default.css";
import { useGetLessonBySlugQuery } from "../graphql/generated";

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    },
  });
  if (!data || !data.lesson) {
    return (
      <div className="flex-1">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>
      {/* bottom of video */}
      <div className="p-8 max-w-[1100px] mx-auto ">
        {/* video informations */}
        <div className="flex flex-col items-center gap-16 xl:flex-row xl:items-start">
          {/* video description */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>
            {/* teacher informations */}
            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img
                  src="https://github.com/rafaelnajman.png"
                  alt="Teacher Photo"
                  className="rounded-full w-16 h-16 border-2 border-blue-500"
                />
                <div className="leading-relaxed">
                  <strong className="font-bold text-2xl block">
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="text-gray-200 text-sm block ">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>
          {/* 2 buttons in right */}
          <div className="flex flex-col gap-4 w-full max-w-[800px] xl:w-fit">
            <a
              href="#"
              className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
            >
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>
            <a
              href="#"
              className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase
               gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors "
            >
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>
        {/* start of links to materials */}
        <div className="gap-8 mt-20 grid grid-rows-2 xl:grid-cols-2">
          <a
            href="#"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch justify-between gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Material complementar</strong>
              <p className="text-sm text-gray-200 mt-2">
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>
            <div className="h-full py-6 pr-6 flex items-center">
              <CaretRight size={24} className="text-blue-500" />
            </div>
          </a>
          <a
            href="#"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch justify-between gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <Image size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Wallpaperps exclusivos</strong>
              <p className="text-sm text-gray-200 mt-2">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} className="text-blue-500" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
