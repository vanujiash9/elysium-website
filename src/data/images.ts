export const images = {
  studio:
    "https://images.unsplash.com/photo-1623479322729-28b25c16b011?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1600",
  code: "https://images.unsplash.com/photo-1630514969818-94aefc42ec47?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400",
  workspace:
    "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400",
  laptop:
    "https://images.unsplash.com/photo-1525373698358-041e3a460346?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400",
  servers:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400",
  abstract:
    "https://images.unsplash.com/photo-1536924491042-b0466800ce46?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400",
  architecture:
    "https://images.unsplash.com/photo-1569258592171-357ea26da4df?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400",
  team: "https://images.unsplash.com/photo-1746712241490-869f5352b1fb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400",
} as const

export type ImageKey = keyof typeof images
