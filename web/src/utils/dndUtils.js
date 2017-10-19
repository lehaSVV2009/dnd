const levelExperienceMap = {
  1: 0,
  2: 1000,
  3: 2250,
  4: 3750,
  5: 5500,
  6: 7500,
  7: 10000,
  8: 13000,
  9: 16500,
  10: 20500,
  11: 26000,
  12: 32000,
  13: 39000,
  14: 47000,
  15: 57000,
  16: 69000,
  17: 83000,
  18: 99000,
  19: 119000,
  20: 143000,
  21: 175000,
  22: 210000,
  23: 255000,
  24: 310000,
  25: 375000,
  26: 450000,
  27: 550000,
  28: 675000,
  29: 825000,
  30: 1000000
}

/**
 * From experience to level. (5000 -> 4, 5500 -> 5, 5501 -> 5)
 */
export const calculateLevel = (experience) => {
  if (!experience || experience < 0 || experience > 1000000 || !Number.isInteger(experience)) {
    throw new Error(`Experience is invalid. ${experience}`)    
  }
  let level = 1
  let closestExperience = levelExperienceMap[level]
  Object.entries(levelExperienceMap).forEach(entry => {
    const minLevelExperience = entry[1]
    if (experience >= minLevelExperience && minLevelExperience > closestExperience) {
      level = entry[0]
      closestExperience = minLevelExperience
    }
  })

  return Number.parseInt(level, 10)
}

/**
 * From level to minimal required experience. (5 -> 5500).
 */
export const getMinLevelExperience = (level) => {
  if (!level || level < 1 || level > 30) {
    throw new Error(`Level is invalid. ${level}`)
  }
  return levelExperienceMap[level]
}

/**
 * Calculate percentage of level.
 * 46 means that user has completed 46% of tasks to get next level.
 */
export const calculatePercentage = (experience) => {
  const level = calculateLevel(experience)
  const minLevelExperience = getMinLevelExperience(level)
  const nextLevelExperience = getMinLevelExperience(level + 1)
  return 100 * (experience - minLevelExperience) / (nextLevelExperience - minLevelExperience)
}