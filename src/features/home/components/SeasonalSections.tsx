import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { formatCurrency } from '@/lib/utils'
import { ROUTES } from '@/lib/constants'
import type { CategoryTile, PromoCard } from '@/mocks/home'
import { catalogRepository } from '@/services/repositories/catalog'
import { useCartStore } from '@/store/cart.store'
import { Dots } from '@/components/ui/Dots'
import { SectionHeader } from '@/components/shared/SectionHeader'

function TileStrip({
  tiles,
  tileHeight = 74,
  glass = false,
}: {
  tiles: CategoryTile[]
  tileHeight?: number
  glass?: boolean
}) {
  return (
    <div className={glass ? "flex gap-[9px]" : "flex gap-2.5"}>
      {tiles.map((tile) => (
        <Link
          key={tile.label}
          to={tile.href}
          className={
            glass
              ? 'flex flex-1 flex-col items-center gap-2.5 rounded-[14px] border border-white/60 bg-white/35 pt-2.5 pb-[15px] shadow-[0_4px_14px_rgba(90,130,160,0.18)] backdrop-blur-md transition-transform hover:-translate-y-0.5'
              : 'flex flex-1 flex-col items-center gap-1.5'
          }
        >
          {glass ? (
            <>
              <div className="flex w-full flex-1 items-center justify-center px-2">
                <img src={tile.image} alt="" loading="lazy" className="h-[76px] w-full object-contain" />
              </div>
              <span className="font-urbanist text-[11px] font-bold text-[#2a2723]">{tile.label}</span>
            </>
          ) : (
            <>
              <span
                className="flex w-full items-center justify-center overflow-hidden rounded-xl bg-white p-2.5 transition-transform hover:-translate-y-0.5"
                style={{ height: tileHeight }}
              >
                <img src={tile.image} alt="" loading="lazy" className="max-h-full max-w-full object-contain" />
              </span>
              <span className="font-urbanist text-[11px] font-bold text-[#2a2723]">{tile.label}</span>
            </>
          )}
        </Link>
      ))}
    </div>
  )
}

/** "Monsoon Essentials" — blue-tinted seasonal strip. */
export function MonsoonSection({ tiles }: { tiles?: CategoryTile[] }) {
  if (!tiles?.length) return null
  return (
    <section>
      <SectionHeader
        title="Monsoon Essentials"
        subtitle="Stay Ready, Stay Protected this Season"
        viewAllHref={ROUTES.category('for-kids')}
        viewAllTone="glass"
      />
      <div className="bg-grad-monsoon overflow-hidden rounded-2xl p-3 md:p-5">
        <TileStrip tiles={tiles} tileHeight={74} glass />
      </div>
      <Dots count={3} active={0} className="mt-3" />
    </section>
  )
}

function YogaPromoCard({ promo }: { promo: PromoCard }) {
  const navigate = useNavigate()
  const addItem = useCartStore((s) => s.addItem)

  async function handleAdd() {
    const product = await catalogRepository.getProduct(promo.productId)
    addItem(product)
    toast.success('Added to cart')
  }

  return (
    <div className="flex min-h-[142px] flex-1 overflow-hidden rounded-[18px] bg-[#fdfaf6] p-3 shadow-[0_4px_12px_rgba(120,90,40,0.06)] transition-transform hover:-translate-y-0.5">
      {/* Left Column */}
      <div className="flex flex-1 flex-col justify-between pr-2">
        <button
          type="button"
          onClick={() => navigate(ROUTES.product(promo.productId))}
          className="cursor-pointer text-left w-full"
        >
          <div className="font-urbanist text-[14px] font-bold leading-tight text-[#2a2723]">{promo.name}</div>
          <p className="font-inter text-[10.5px] leading-[1.3] text-[#736c63] mt-1 line-clamp-2 min-h-[28px]">{promo.desc}</p>
        </button>
        <div className="mt-1">
          <div className="font-inter text-[9px] text-[#8c857c] font-medium leading-none">Starting From</div>
          <div className="font-inter mt-0.5 text-[18px] font-extrabold leading-none text-[#2a2723]">
            {formatCurrency(promo.price)}
          </div>
        </div>
        <button
          type="button"
          onClick={handleAdd}
          className="cursor-pointer mt-2.5 flex items-center justify-center rounded-full bg-[#f7941e] py-1.5 font-urbanist text-[11px] font-bold text-white shadow-[0_3px_10px_rgba(247,148,30,0.25)] transition-transform hover:scale-102"
        >
          Add to Cart
        </button>
      </div>

      {/* Right Column */}
      <div className="flex w-[80px] shrink-0 items-center justify-center">
        <img src={promo.image} alt={promo.name} loading="lazy" className="max-h-[85px] max-w-full object-contain" />
      </div>
    </div>
  )
}

/** "Celebrate Yoga Day!" — purple-tinted strip with two promo cards. */
export function YogaSection({ tiles, promos }: { tiles?: CategoryTile[]; promos?: PromoCard[] }) {
  if (!tiles?.length) return null
  return (
    <section>
      <SectionHeader
        title="Celebrate Yoga Day!"
        subtitle="Healthy habits start young."
        viewAllHref={ROUTES.category('for-kids')}
      />
      <div 
        className="bg-grad-yoga bg-cover bg-center rounded-2xl p-3 md:p-5"
        style={{ backgroundImage: "url('/components/bg2.png')" }}
      >
        <TileStrip tiles={tiles} tileHeight={70} />
        {promos && promos.length > 0 && (
          <div className="mt-3 flex gap-2.5 md:gap-4">
            {promos.map((promo) => (
              <YogaPromoCard key={promo.productId} promo={promo} />
            ))}
          </div>
        )}
      </div>
      <Dots count={3} active={0} className="mt-3" />
    </section>
  )
}
