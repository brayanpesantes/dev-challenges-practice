"use client";

import IconPause from "@/components/icons/Pause";
import { IcoPlay } from "@/components/icons/Play";
import PlayPauseLeft from "@/components/icons/PlayPauseLeft";
import PlayPauseRight from "@/components/icons/PlayPauseRight";
import Image from "next/image";
import { useRef, useState } from "react";

type Music = {
  music: string;
  cover: string;
  title: string;
  artist: string;
};

const listMusicPlayer: Music[] = [
  {
    title: "Forest Lullaby",
    artist: "Lesfm",
    music: "/songs/forest-lullaby-110624.mp3",
    cover: "/songs/cover-1.png",
  },
  {
    title: "Lost in the City Lights",
    artist: "Cosmo Sheldrake",
    music: "/songs/lost-in-city-lights-145038.mp3",
    cover: "/songs/cover-2.png",
  },
];

export default function MusicPlayerPage() {
  const [listMusic, SetListMusic] = useState<Music[]>(listMusicPlayer);
  const [currentMusic, setCurrentMusic] = useState<Music>(listMusic[0]);
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressAudioRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState<string>("00:00");
  const [currentTime, setCurrentTime] = useState<string>("00:00");
  const [isPlaying, setIsPlaying] = useState(false);

  const nextMusic = () => {
    setIsPlaying(false);

    const currentIndex = listMusic.findIndex(
      (music) => music.music === currentMusic.music
    );
    const nextIndex = (currentIndex + 1) % listMusic.length;

    setCurrentMusic(listMusic[nextIndex]);
  };
  const previousMusic = () => {
    setIsPlaying(false);

    const currentIndex = listMusic.findIndex(
      (music) => music.music === currentMusic.music
    );
    const previousIndex =
      (currentIndex - 1 + listMusic.length) % listMusic.length;
    setCurrentMusic(listMusic[previousIndex]);
    handleTimeUpdate();
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };
  const handleTimeUpdate = () => {
    if (audioRef.current && isFinite(audioRef.current.duration)) {
      setCurrentTime(convertTime(audioRef.current.currentTime));
      setDuration(convertTime(audioRef.current.duration));
      if (progressAudioRef.current !== null) {
        progressAudioRef.current.style.width = `${
          (audioRef.current.currentTime / audioRef.current.duration) * 100
        }%`;
      }
    } else {
      setCurrentTime("00:00");
      setDuration("00:00");
      if (progressAudioRef.current !== null) {
        progressAudioRef.current.style.width = "0%";
      }
    }
  };
  const convertTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const formattedSeconds = String(seconds).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <main className="font-inter max-w-screen-xl h-screen bg-music bg-cover bg-no-repeat flex justify-center items-center">
      <section className="w-[345px] lg:w-[350px] h-auto bg-music-300 rounded-xl">
        <div className="p-5">
          <Image
            src={currentMusic?.cover}
            alt=""
            width={288}
            height={308}
            className="w-full  bg-cover aspect-[17/16] rounded-xl"
            priority
          />
          <div className="text-center mt-4">
            <h2 className="text-music-100 text-base font-medium">
              {currentMusic?.title}
            </h2>
            <p className="mt-1.5 text-music-200 text-xs font-medium">
              {currentMusic?.artist}
            </p>
          </div>
          <div className="mt-7">
            <div className="flex justify-between mb-1">
              <audio
                className="hidden"
                src={currentMusic?.music}
                ref={audioRef}
                onTimeUpdate={handleTimeUpdate}
              />
              <span className="font-medium text-music-200 text-[10px] ">
                {currentTime}
              </span>
              <span className="font-medium text-music-200 text-[10px] ">
                {duration}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-[5px] ">
              <div
                ref={progressAudioRef}
                className="bg-music-500 h-[5px] rounded-full   shadow-music-500 shadow-inner"
              ></div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 mt-9">
            <button className="w-max" onClick={previousMusic}>
              <PlayPauseRight className="w-6 h-[18px]" />
            </button>
            <button
              className="size-12 bg-music-500 rounded-full flex items-center justify-center text-music-100 shadow-lg shadow-music-500/30"
              onClick={handlePlayPause}
            >
              {isPlaying ? <IconPause /> : <IcoPlay />}
            </button>
            <button className="w-max" onClick={nextMusic}>
              <PlayPauseLeft className="w-6 h-[18px]" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
