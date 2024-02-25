export const NowLoading = (loadingWords: { loadingWords: string }) => {
  return (
    <>
      <h2 className="block mb-1 text-lg font-semibold text-gray-900 dark:text-white">
        {loadingWords.loadingWords}
      </h2>
      <span className="loading loading-dots loading-lg"></span>
    </>
  );
};
