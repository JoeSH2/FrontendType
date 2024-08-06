type objClasses = Record<string, boolean | string | undefined>

interface clsProps {
  arrClasses: Array<string | undefined>
  className: string
}

export const cls = (
  className: string,
  objectClasses: objClasses,
  arrClasses: Array<string | undefined>
) => {
  return [
    className,
    ...Object.entries(objectClasses)
      .filter(([_, key]) => Boolean(key))
      .map(([className, key]) => className),
    arrClasses?.filter(Boolean),
  ].join(' ')
}
